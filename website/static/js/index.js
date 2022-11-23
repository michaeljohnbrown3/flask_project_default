function deleteTodo(todoId) {
  fetch("/delete-todo", {
    method: "POST",
    body: JSON.stringify({ todoId: todoId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

function checkTodo(todoId) {
  fetch("/check-todo", {
    method: "POST",
    body: JSON.stringify({ todoId: todoId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}
