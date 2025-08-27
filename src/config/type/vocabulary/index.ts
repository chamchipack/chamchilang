import { z } from 'zod';

// Vocabulary 스키마 (Zod)
export const VocabularySchema = z.object({
  id: z.string(), // ObjectId → string
  system: z.boolean().default(false), // 시스템 제공 단어장 여부
  userId: z.string().optional(), // system=false일 때만 필수 (runtime에서 체크 가능)

  title: z.string().min(1), // 단어장 제목
  description: z.string().default(''), // 설명
  color: z.string().default('#0A84FF'), // UI용 색상 hex
  tags: z.array(z.string()).default([]), // 태그 리스트

  // 단어 참조 (Word ObjectId)
  words: z.array(z.string()).default([]),

  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Vocabulary = z.infer<typeof VocabularySchema>;
