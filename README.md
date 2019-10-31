# Tenant Verification Client ReadMe

###Description
Landlords have experienced bad renting experiences, whether a tenant failed to observe building rules or someonoe failed to pay rent and refused to leave the property. Landlords may worry about their next tenant and do not have the resources to make informed choices about their next tenant. Tenant Verification makes it easy for landlords, in addition to background checks, also see history on a tenant before allowing them to move in and avoid future confrontations or legal involvement.

It is an interactive application that allows users to inform landlords about their past renting experiences. It allows users to contribute.

The front-end complement of this repo lives here.

Built With
Ruby - version 2.6.3
Rails - version 5.2.3
ActiveRecord
Plans
See dev_log file add to it !

Installation & Usage
Before you can test or use this application, you must
Install Ruby
Install Ruby on Rails
Install SqLite3
Next
Fork this repository to your account
Open your terminal or command prompt and clone this repository to a directory of your choice
Open the cloned repo's directory in your favorite editor (e.g. Atom, Visual Studio Code, Sublime, Brackets)
In the Terminal or Command Prompt, navigate to the tenant_verification_api directory
Next, type bundle install. This should install all of the required gems
Don't forget Run rake db:create
Run rake db:migrate to run the migrations
Type rails s -p 3001 into the terminal to launch the server
Open your browser and navigate to http://localhost:3001 (press ctrl-C or control-C while in the terminal to exit.)
Running the tests
To run the tests type rspec in your terminal.

Contributing
To contribute
If you have NOT followed the instructions to fork, clone, and set up the repository on your machine:

Follow the instructions in the Usage & Instructions section if you have not already done so
Continue to (3) once you have forked the repo, cloned it, and gotten the repo working on your machine
If you HAVE followed the instructions to fork, clone, and set up the repository on your machine:

Make sure you are in the master branch when you start
  git checkout master
Backup work you want to keep & update your forked repo
To update your forked & cloned repo type:
# all names, including the remote name and branch, are case-sensitive


# if you have not already done so, add a named remote to the source repo
git remote add upstream https://github.com/Flatiron-group/tenant_verification_api.git


# get the info from the source repo
git fetch upstream


# merge the info to your master
git merge upstream/master


# push & update your forked repo
git push origin master


# ** This will update your clone and fork **

Figure out what it is you want to add or edit
Create a new branch for it on your cloned repo
(preferebly) Add tests for the functionality that you want to add
Make your additions or changes
Test that the code is clean
Run the tests to make sure the changes didn't break anything
Stage the additions/changes (using git add)
Commit the additions/changes with a proper commit message
Push it up to your repository (the new branch) git push origin branch-name
Create a new pull request and include a brief description of & reason for the change
Wait to see if your pull request gets accepted :)
Reporting Issues
You may report bugs & issues on GitHub

Code of Conduct
Everyone interacting in BeInTheKnow's codebases, issue trackers, chat rooms, and mailing lists is expected to follow the code of conduct.

License
The gem is available as open source under the terms of the MIT License.
