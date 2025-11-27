# notes

**Git**
1. Amend message
```typescript
git commit --amend -m”message”
```
2. Undo
    + Từ Staging:
    ```typescript
    git restore --staged <file_name>
    git restore --staged .
    ```
    + Từ Repo

    1 commit
    ```typescript
    git reset HEAD~1
    ```
    N commit
    ```typescript
    git reset HEAD~N
    ```

**JS**
1. Update

Vẫn update đc 1 thuộc tính của object
  ```typescript
const student = {“name”: “alex”, “age”: 20}
student.name = “Nagi”; // Hợp lệ
```
2. Add 

Có thẻ dùng . hoặc [] để thêm thuộc tính mới cho object
```typescript
let bike = {
make: 'Yamaha',
model: 'YZF-R3'
};
bike.color = “Blue”;
bike[“price new”] = 100;
```
```typescript
console.log(bike);
{make: 'Yamaha', model: 'YZF-R3', color: 'Blue', ‘price new’ : 100}
```

3. Delete

Dùng hàm delete:
```typescript
let employee = {
name: 'Le Van C',
age: 30,
department: 'HR'
};
delete employee.age;
```
```typescript
console.log(employee);
{name: 'Le Van C', department: 'HR'}
```