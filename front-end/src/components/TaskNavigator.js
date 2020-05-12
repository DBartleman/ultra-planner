import React from 'react';

const Headers = ({ titles, currentList, selectList }) => {
  const handleClick = (e) => {
    const idx = parseInt(e.target.id, 10);
    console.log('task clicked');
    selectList(idx);
  }

  const lists = titles.map((title, idx) => {
    const headerClass = (idx === currentList) ? 'active' : '';

    return (
      <li
        key={idx}
        id={idx}
        onClick={handleClick}
        className={headerClass}
      >
        {title}
      </li>
    );
  });
  
  return (
    <ul className='list-header'>
      {lists}
    </ul>
  );
}

class TaskNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: 0
    };
  }

  selectList = (num) => {
    this.setState({ currentList: num });
  }

  render() {
    const list = this.props.lists[this.state.currentList];
    const titles = this.props.lists.map((list) => list.title);
    const tasks = list.tasks;
    console.log(tasks);
    return (
      <div>
        {/* <h1>Lists</h1> */}
        <div className='lists'>
          <Headers className='list-titles'
            titles={titles}
            currentList={this.state.currentList}
            selectList={this.selectList}
          />
          <div className='list-tasks'>
            {
              tasks.map(task =>
                <div>
                  <div className='task-title'>{task.title}</div>
                  <div className='task-description'>{task.description}</div>
                  {/* <div>{task.gif}</div> */}
                  <br />
                </div>
              )    
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TaskNavigator;