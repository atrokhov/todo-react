# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Todo(models.Model):
    text = models.CharField(max_length=255)
    pub_date = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Задания'

    def __str__(self):
        return self.text