// factory function to create new 'to-do's. create other add-ons later, such as notes or a checklist
export function toDoItemMaker(title, description, dueDate, priority) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
  }
}
