import { defineDb, defineTable, column, desc } from 'astro:db';


const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true, autoIncrement: true }),
    email: column.text({ unique: true }),
    username: column.text({ unique: true }),
  }
});

const ToDo = defineTable({
  columns: {
    id: column.text({ primaryKey: true, autoIncrement: true }),
    title: column.text(),
    description: column.text(),
    user_id: column.text({ references: () => User.columns.id }),
    category_id: column.text({ references: () => Category.columns.id }),
  }
});

const Category = defineTable({
  columns: {
    id: column.text({ primaryKey: true, autoIncrement: true }),
    name: column.text({ unique: true }),
  }

});

// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    ToDo,
    Category,
  }
});
