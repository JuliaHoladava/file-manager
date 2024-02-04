# file-manager

### List of operations and their syntax:

* Go upper from current directory
```
up
```
* Go to dedicated folder from current directory
```
cd path_to_directory
```
* Print in console list of all files and folders in current directory
```
ls
```
* Read file and print it's content in console
```
cat path_to_file
```
* Create empty file in current working directory
```
add new_file_name
```
* Rename file
```
rn path_to_file new_filename
```
* Copy file
```
cp path_to_file path_to_new_directory
```
* Move file
```
mv path_to_file path_to_new_directory
```
* Delete file
```
rm path_to_file
```
* Get EOL (default system End-Of-Line) and print it to console
```
os --EOL
```
* Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console
```
os --cpus
```
* Get home directory and print it to console
```
os --homedir
```
* Get current system user name and print it to console
```
os --username
```
* Get CPU architecture for which Node.js binary has compiled and print it to console
```
os --architecture
```
*You can combine this argiments in one request:*
```
os --EOL --cpus --homedir --username --architecture
```

* Calculate hash for file and print it into console
```
hash path_to_file
```
* Compress file
```
compress path_to_file path_to_destination
```
* Decompress file
```
decompress path_to_file path_to_destination
```
