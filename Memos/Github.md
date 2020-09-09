# Github

Github를 이용할 때 자주 사용하는 명령어들

# - private clone or remote

```
git clone https://{myid}@github.com/kir931028/MyNext
git remote add origin https://{myid}@github.com/kir931028/MyNext
```

# - git change remote

```
git remote remove origin --> 예전 remote 삭제
git remote add origin {address}
```

# - first git clean pull & push

```
git pull origin master
git add . --> 모두 선택
git commit -m '{message}'
git push
```

# - git add/reset branch

```
git checkout -b/-B <branchName>
git push --set-upstream origin <branchName>
```

# - git change branch

```
git checkout <branchName>
```
