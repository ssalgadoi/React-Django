from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager

# ==========================
# GESTOR PERSONALIZADO DE USUARIOS
# ==========================
# Creamos un nuevo "manager" (gestor) para controlar cómo se crean los usuarios y superusuarios
class CustomerUserManager(BaseUserManager):
    
    # Método para crear un usuario normal
    def create_user(self, email, password=None, **extra_fields):
        # Verificamos que se haya proporcionado un email
        if not email:
            raise ValueError('Email is required field')
        
        # Normalizamos el email (por ejemplo, convierte todo a minúsculas)
        email = self.normalize_email(email)
        
        # Creamos una instancia del usuario con el email y campos extra
        user = self.model(email=email, **extra_fields)
        
        # Encriptamos la contraseña
        user.set_password(password)
        
        # Guardamos el usuario en la base de datos
        user.save(using=self._db)
        return user
    
    # Método para crear un superusuario (administrador del sitio)
    def create_superuser(self, email, password=None, **extra_fields):
        # Aseguramos que tenga permisos de administrador
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        # Reutilizamos el método anterior para crear el usuario
        return self.create_user(email, password, **extra_fields)

# ==========================
# MODELO PERSONALIZADO DE USUARIO
# ==========================
# Extendemos de AbstractUser para mantener funcionalidades de Django pero modificarlas a nuestro gusto
class CustomerUser(AbstractUser):
    # Hacemos que el campo de email sea único y obligatorio
    email = models.EmailField(max_length=200, unique=True)
    
    # Añadimos un nuevo campo opcional: fecha de nacimiento
    birthday = models.DateField(null=True, blank=True)
    
    # Sobrescribimos el campo 'username' para hacerlo opcional
    username = models.CharField(max_length=200, null=True, blank=True)
    
    # Indicamos que este modelo usará nuestro gestor personalizado
    objects = CustomerUserManager()
    
    # Hacemos que el campo principal de autenticación sea el email
    USERNAME_FIELD = 'email'
    
    # Campos obligatorios al crear un superusuario (además del email)
    REQUIRED_FIELDS = []
