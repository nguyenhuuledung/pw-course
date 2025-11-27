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
3. Repo


