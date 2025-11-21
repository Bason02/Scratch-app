export enum BlockCategory {
  Motion = 'motion',
  Looks = 'looks',
  Sound = 'sound',
  Events = 'events',
  Control = 'control',
  Sensing = 'sensing',
  Operators = 'operators',
  Variables = 'variables',
  MyBlocks = 'myblocks',
}

export interface ScratchBlockData {
  id: string;
  text: string; // The text on the block, e.g., "Move 10 steps"
  category: BlockCategory;
  type: 'hat' | 'stack' | 'reporter' | 'cap' | 'c-block' | 'boolean'; // Shape of the block
  indent?: boolean; // For C-blocks like "Repeat" inside
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctOptionIndex: number;
}

export interface PracticeChallenge {
  instruction: string;
  initialBlocks: (ScratchBlockData | 'GAP')[]; // Represents the script with a missing piece
  missingBlockId: string; // The ID of the correct block to fill the GAP
  options: ScratchBlockData[]; // Pool of blocks to choose from
}

export interface LessonContent {
  title: string;
  description: string;
  exampleBlock: ScratchBlockData;
  explanation: string;
}

export interface Level {
  id: number;
  title: string;
  category: BlockCategory;
  learn: LessonContent;
  practice: PracticeChallenge[]; // Changed to Array
  quiz: QuizQuestion[]; // Changed to Array
}

export interface UserProgress {
  completedLevels: number[]; // Array of Level IDs
  currentLevelId: number;
}