function Head() {
  return (
    <div class="head">
      <h1>Task Tracker</h1>
      <form class="head__form">
        <div class="head__input">
          <label for="name">Name</label>
          <input type="text" name="name" />
        </div>
        <button>Add task</button>
      </form>
    </div>
  );
}

export default Head;
