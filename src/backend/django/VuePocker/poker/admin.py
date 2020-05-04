import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class PokerUserManager(BaseUserManager):
    def create_user(self, password=None, **extra_fields):


class PokerUser(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    username_validator = UnicodeUsernameValidator()

    username = models.CharField(
        _('username'),
        max_length=150,
        unique=True,
        help_text=_(
            'Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.'),
        validators=[username_validator],
        error_messages={
            'unique': _("A user with that username already exists."),
        },
    )

    userpassword = models.CharField(max_length=50)

    USERNAME_FIELD="username"

    objects = PokerUserManager()

    class Meta:
        db_table = 'poker_user'
        swappable = 'AUTH_USER_MODEL'