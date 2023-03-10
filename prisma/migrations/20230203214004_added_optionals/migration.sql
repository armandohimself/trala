-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_userId_fkey";

-- AlterTable
ALTER TABLE "Lesson" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "isUpcomingLesson" DROP NOT NULL,
ALTER COLUMN "isPastLesson" DROP NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
