import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    clerkId: text('clerk_id').notNull().unique(),
    userName: text('user_name').notNull(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    age: integer('age').notNull(),
    email: text('email').notNull().unique(),
    createdAt: timestamp('created_at', {withTimezone:true}).notNull().defaultNow(),
    updatedAt: timestamp('updated_at',{withTimezone:true}).notNull().defaultNow().$onUpdate(()=> new Date()),
});
