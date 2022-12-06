import { tagMaker } from './tagMaker';

function taskTile(){
  const title = tagMaker('li', 'task-title');
  const description = tagMaker('li', 'task-description');
  const dueDate = tagMaker('li', 'dueDate');
  const priority = tagMaker('li', 'prioritize');
  const input = tagMaker('input', 'prioritize');
  input.setAttribute('name', 'prioritize');
  input.setAttribute('type', 'radio');
  priority.appendChild(input);
  
  const dateAndPriority = tagMaker('ul', 'date-and-priority');
  dateAndPriority.append(dueDate, priority)

  const mainTaskItem = tagMaker('li', 'main-task-item');
  mainTaskItem.append(title, description, dateAndPriority);
  return mainTaskItem;
}

export { taskTile }

<li>


<ul class="main-task-item">

  <li class="task-title">Mow the lawn</li>
  <li class="task-description">Just cut the dang grass, will you?</li>
  <li class="item-bottom-box">

    <ul class="date-and-priority">
      <li class="dueDate"> <!-- find a date picker for this --> Nov. 8th, 2022</li>
      <li class="prioritize">
        <input type="radio" name="prioritize" id="prioritize">
      </li>
    </ul>

  </li>

</ul>
</li>