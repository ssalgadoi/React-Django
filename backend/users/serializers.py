from rest_framework import serializers
from .models import *  # (opcional, si no usas tus propios modelos aquí, puedes eliminar esta línea)
from django.contrib.auth import get_user_model

# Obtiene el modelo de usuario configurado en el proyecto (puede ser el modelo personalizado si lo usaste)
User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  # Modelo con el que trabajará el serializer
        fields = ('id', 'email', 'password')  # Campos que queremos incluir en el registro
        extra_kwargs = {
            'password': {'write_only': True}  # Para que el campo password no se muestre en la respuesta
        }

    # Este método sobrescribe la creación del usuario
    def create(self, validated_data):
        # Utiliza el método create_user del modelo para crear un nuevo usuario (y encriptar la contraseña)
        user = User.objects.create_user(**validated_data)
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
   
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret.pop('password', None)
        return ret