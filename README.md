# Overview
This is a sample full-stack application made with AngularJS, Flask, and SQLite. It displays information about the issues of a Github repository. It uses the Github REST API to fetch information.

# Requirements
This web app requires these programs: 

- Python 3
- pip
- virtualenv
- bower

# Installation
Activate virtualenv

> virtualenv venv

> source venv/bin/activate

Install all required Python libraries

> pip3 install -r requirements.txt

Install all required JS libraries

> cd static/

> bower install

# Usage
While inside the virtual environment:

> python3 app.py

After logging in, you can go to the issues page. When you enter the name of a Github repository in the form owner/repository (eg: d3/d3) into the text box, it will display a table of issues in that repository. Clicking on a particular issue will display a table containing comments on that issue.
