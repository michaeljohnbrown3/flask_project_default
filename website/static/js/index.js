function postRoute(route, todoId) {
  fetch(route, {
    method: "POST",
    body: JSON.stringify({ todoId: todoId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

function deleteTodo(todoId) {
  postRoute("/delete-todo", todoId);
}

function checkTodo(todoId) {
  postRoute("/check-todo", todoId);
}

function uncheckTodo(todoId) {
  postRoute("/uncheck-todo", todoId);
}
