export default function Todo() {
  return (
    <main>
      <h1>Simple ToDo App</h1>
      {/* input Area */}
      <div>
        <input type="text" />
        <button>Add</button>
      </div>

      {/* Not Started Area */}
      <div>
        <h2>Not Started</h2>
        <ul>
          <li>
            Todo1
            <button>In Progress</button>
          </li>
          <li>
            Todo2
            <button>In Progress</button>
          </li>
        </ul>
      </div>

      {/* In Progress Area */}
      <div>
        <h2>In Progress</h2>
        <ul>
          <li>
            Todo1
            <button>Not Started</button>
            <button>Completed</button>
          </li>
          <li>
            Todo2
            <button>Not Started</button>
            <button>Completed</button>
          </li>
        </ul>
      </div>

      {/* Completed Area */}
      <div>
        <h2>Completed</h2>
        <ul>
          <li>
            Todo1
            <button>In Progress</button>
          </li>
          <li>
            Todo2
            <button>In Progress</button>
          </li>
        </ul>
      </div>
    </main>
  )
}
