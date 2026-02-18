import sys

def read_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
        print(content)

if __name__ == "__main__":
    read_file(sys.argv[1])
