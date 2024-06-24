document.addEventListener('DOMContentLoaded', () => {
    const addExerciseButton = document.getElementById('add-exercise');
    const exerciseList = document.getElementById('exercise-list');

    addExerciseButton.addEventListener('click', () => {
        const newExercise = prompt('Enter a new exercise:');
        if (newExercise) {
            const newListItem = document.createElement('li');
            newListItem.textContent = newExercise;
            exerciseList.appendChild(newListItem);
        }
    });
});
