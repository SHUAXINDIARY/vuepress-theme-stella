interface ICommand {
  i: string;
  git: string;
}

interface ICommandMap {
  i: () => void;
}

export { ICommand, ICommandMap };
