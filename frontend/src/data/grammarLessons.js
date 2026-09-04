// =========================================================================
// SajiloHub — Structured Grammar Lessons Data Store
// Aligned strictly with JLPT syllabi for levels N5 to N1.
// Modularized into level-specific files for performance and maintainability.
// =========================================================================

import { n5Lessons } from './grammar/n5';
import { n4Lessons } from './grammar/n4';
import { n3Lessons } from './grammar/n3';
import { n2Lessons } from './grammar/n2';
import { n1Lessons } from './grammar/n1';

export const lessonsData = {
  n5: n5Lessons,
  n4: n4Lessons,
  n3: n3Lessons,
  n2: n2Lessons,
  n1: n1Lessons
};
