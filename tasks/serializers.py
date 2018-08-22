from rest_framework import serializers

from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'text', 'done', 'pub_date', )

    def done(self, instance, validated_data):
        instance.done = validated_data.get('done', instance.done)
        return instance
