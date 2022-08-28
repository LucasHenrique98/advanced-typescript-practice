enum TaskType {
  feature = 'feature',
  bug = 'bug',
}

type Task<T = TaskType> = {
  name: string;
  type: T;
};

const whatever: Task = { name: 'lucas', type: TaskType.feature };

type FeatureTask = Task<TaskType.feature>;

const feature: FeatureTask = { name: 'feature', type: TaskType.feature };
// feature.type = TaskType.bug;

// const invalid: FeatureTask = { name: 'invalid', type: TaskType.bug };
