import { db, User, Category, ToDo } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{
			id: 'adminTest',
			email: 'admin@gmail.com',
			username: 'admin',
		},
		{
			id: 'userTest',
			email: 'userTest@gmail.com',
			username: 'user',
		},
	]);
	await db.insert(Category).values([
		{
			id: '1',
			name: 'Software',
		},
		{
			id: '2',
			name: 'Hardware',
		},
	]);

	await db.insert(ToDo).values([
		{
			id: '1',
			title: 'Task 1',
			description: 'Description 1',
			user_id: 'adminTest',
			category_id: '1',
		},
		{
			id: '2',
			title: 'Task 2',
			description: 'Description 2',
			user_id: 'adminTest',
			category_id: '2',
		},
		{
			id: '3',
			title: 'Task 3',
			description: 'Description 3',
			user_id: 'userTest',
			category_id: '1',
		},
	]);
}
