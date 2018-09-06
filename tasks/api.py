from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = TodoSerializer

class UpdateTodo(generics.UpdateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [permissions.AllowAny, ]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=self.request.data.get("done"))
        serializer.is_valid()
        instance.save()
        self.perform_update(serializer)

        return Response(serializer.data)
