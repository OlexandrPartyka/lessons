class Schedule {
    constructor() {
        this.schedule = {
            'Monday': {},
            'Tuesday': {},
            'Wednesday': {},
            'Thursday': {},
            'Friday': {}
        };
    }

    addLesson(day, lessonNumber, lessonName) {
        if (this.schedule.hasOwnProperty(day)) {
            this.schedule[day][lessonNumber] = lessonName;
            console.log(`Lesson ${lessonNumber} added for ${day}: ${lessonName}`);
        } else {
            console.log(`cant add lesson for ${day}, since the day does not exist.`);
        }
    }

    printSchedule() {
        for (let day in this.schedule) {
            console.log(`${day}:`);
            for (let lessonNumber in this.schedule[day]) {
                console.log(`Lesson ${lessonNumber}: ${this.schedule[day][lessonNumber]}`);
            }
            console.log();
        }
    }
}

const schedule = new Schedule();

schedule.addLesson('Понеділок', 1, 'no lesson');
schedule.addLesson('Понеділок', 2, 'English');
schedule.addLesson('Понеділок', 3, 'neural networks');

schedule.addLesson('Вівторок', 1, 'English');
schedule.addLesson('Вівторок', 2, 'Programming');
schedule.addLesson('Вівторок', 3, 'Mathematical analysis');

schedule.addLesson('Середа', 1, 'Ukrainian');
schedule.addLesson('Середа', 2, 'Programming');
schedule.addLesson('Середа', 3, 'neural networks');

schedule.addLesson('Четвер', 1, 'Mathematical analysis');
schedule.addLesson('Четвер', 2, 'English');
schedule.addLesson('Четвер', 3, 'Crythical thinking');

schedule.addLesson('Пʼятниця', 1, 'information and communication technologies');
schedule.addLesson('Пʼятниця', 2, 'Ukrainian');
schedule.addLesson('Пʼятниця', 3, 'neural networks');

schedule.printSchedule();
