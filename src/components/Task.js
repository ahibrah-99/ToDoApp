// Task class definition
export default class Task {
    constructor(label) {
        this.label = label;
        this.status = 0; // 0 for pending and 1 for done
        this.deleted = 0; // 0 for present and 1 for deleted
    }
}
