# -*- coding: utf-8 -*-

from django import forms

# from ..forms import ServiceChangeForm

from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password,check_password

# -----------------------------------------------------------------------------
# User
# -----------------------------------------------------------------------------

class UserCreationForm(forms.ModelForm):
    """Custom User"""

    class Meta():
        model = User
        fields = [
            "email",
            "password",
            "first_name",
            "last_name",
            "username",
            "is_active"
        ]

    def __init__(self,*args, **kwargs):
        print(kwargs)
        super().__init__(*args, **kwargs)

    def clean(self):
        cleaned_data = super(UserCreationForm, self).clean()
        email = cleaned_data.get("email")
        password = cleaned_data.get("password")
        last_name = cleaned_data.get("last_name")
        first_name = cleaned_data.get("first_name")

        if not email :
            raise forms.ValidationError(
                "Please add email."
            )
        if not password :
            raise forms.ValidationError(
                "Please add Password."
            )
        if not last_name :
            raise forms.ValidationError(
                "Please add last name."
            )
        if not first_name :
            raise forms.ValidationError(
                "Please add first name."
            )
    def save(self, commit=True):
        instance = super().save(commit=False)

        if commit:
            instance.is_active = True
            instance.save()

        return instance



class UserChangeForm(forms.ModelForm):
    """Custom form to change User"""

    class Meta():
        model = User

        fields = [
            "email",
            "password",
            "first_name",
            "last_name",
            "username",
            "is_active"
        ]

    def clean(self):
        print(type(self.instance))
        cleaned_data = super(UserChangeForm, self).clean()
        email = cleaned_data.get("email")
        password = cleaned_data.get("password")
        last_name = cleaned_data.get("last_name")
        first_name = cleaned_data.get("first_name")
        password = cleaned_data.get('password')
        if not email :
            raise forms.ValidationError(
                "Please add email."
            )
        if not password :
            raise forms.ValidationError(
                "Please add Password."
            )
        if not last_name :
            raise forms.ValidationError(
                "Please add last name."
            )
        if not first_name :
            raise forms.ValidationError(
                "Please add first name."
            )

    def save(self, commit=True):
        instance = super().save(commit=False)

        if commit:
            print(instance.password)
            instance.password = make_password(instance.password)
            instance.save()
            print(instance.password)

        return instance