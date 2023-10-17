#!/bin/bash
# sudo go.sh
# Start Flask app in the background
exec > >(tee -a logfile.log) 2>&1

echo "Starting Flask..."
python3.10 /Users/paulmurphy/consulting/1121/py/Flask.py &
#!/bin/bash

# Print the path to Python 3.10
python_path=$(which python3.10)

echo "Python 3.10 Path: $python_path"

echo "Flask UP...."
# Start React app

echo "Starting Frontend...."
cd /Users/paulmurphy/consulting/1121
npm start
echo "Frontend UP @ Localhost:3000"

