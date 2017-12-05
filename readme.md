## AE Partner Programmer Evaluation Project

Hello, this is repository contains a sample Laravel 5.3 project, that is used
for programmer evaluation.

The application is a small "blog". It contains a list of blog posts and each
of them can have multiple comments.

To get your qualification, you must complete the tasks listed below.

The tasks are in English to evaluate language comprehension skills.

You can either just send in the completed project as a ZIP to it@aepartner.lv, or [fork this project](https://help.github.com/articles/fork-a-repo/) on GitHub. Creating pull requests is a nice idea, but that would make your code more public.

If you are qualifying for a vacant programmer position and have reached this repo via a link from human resources, we also do code review, just mention that you would like code review and a link to your forked repository, in a mail to it@aepartner.lv.

## Task 0: Installing

_This task evaluates the skill "programmer" :)_

You will need PHP and [composer](https://getcomposer.org).

1. Checkout the repository

2. Run `composer install`

3. Run `php artisan serve`

4. Connect to `http://localhost:8000`

Info about the repository: we have added a `database/database.sqlite` file to this
repo, so some sample data is already inside. By completing the tasks, you can
choose to either add the modified `database.sqlite` file to the commit or omit it.

Hints:
* [Laravel Documentation](https://laravel.com/docs/5.3)
* Check out the database.sqlite table structure in `/database/migrations`

## Task 1: Maximum Post Title Length

_This task evaluates familiarity with MVC frameworks and Laravel_

The application allows creating new posts. In `localhost:8000/post/create` page, add
validation so that it is impossible to create posts with description longer than 255 characters.

Hints:
* controller file `/app/Http/Controllers/PostController.php`
* view file `/resources/views/post/create.blade.php`
* model files `/app/Post.php`
* [Laravel Validation](https://laravel.com/docs/5.3/validation)


Comment: Moved validation in Request classes

## Task 2: Unique Post Titles

When creating new post in `localhost:8000/post/create`, check if post with such title already exists and prevent
creating a duplicate.

Comment: Done in Request class `StorePostRequest`
## Task 3: Editing Posts

When opening a post, there is functionality to edit it (`localhost:8000/post/1/edit`). Please make sure that the
same validation created in Task 1 and 2 is also used when editing.

Hints:
* file: `/resources/views/post/edit.blade.php`
Comment: Update logic moved in `Api\PostController` validates by `UpdatePostRequest`

## Task 4: Create Possibility to Delete Posts

Create possibility to delete post from the post list view `localhost:8000/post`.

## Task 5: Display Creation Date in Post List

In post list view `localhost:8000/post`, display creation and last update date next to each post.

## Task 6: Block Commenters

Under each post, a list of comments is displayed (`localhost:8000/post/1`). Add a "block this person"
button next to each comment. The button should delete all comments from
database with the same email.

Comment: Datetime format stored in config/blog

## Task 7: Links and Navigation

_This task evaluates familiarity with HTML and UX_

In all pages, add link to start page, and a page title. Optionally create some
navigation.

Comment: Added pagination and navigation

## Task 8: Style

_This task evaluates familiarity with CSS and Laravel build tools_

Add some style to the application. Use of CSS frameworks (Bootstrap, Zurb,
Google Material, etc) is permitted.

For extra points, you can also use the built in gulpfile and node to build CSS
from SCSS.

Comment: used elixir to build bootstrap sass files and custom sass styles

## Task 9: Advanced Block Commenters Functionality

_This task evaluates skill to add full functionality to a project_

Create a new table for blocked commenters with one field: "email".

The idea is that, once a commenter is blocked, his email will be registered
in this table, and new comments will not be permitted with that email.

You need to:
* Create the new table
* When blocking commenter (functionality from task 6) add the email to the new
  table.
* When posting a new comment, check if the provided email is not in blocked
  commenters table.

Hints:
* [Laravel Migrations](https://laravel.com/docs/5.3/migrations) are highly recommended,
  but other means of creating the table are also ok, if the database.sqlite file
  will be committed for review.

## Task 10: Add a JavaScript Framework

_This task evaluates familiarity with modern JavaScript_

Convert one or more pages by adding JavaScript functionality using
([React](https://facebook.github.io/react/), [Vue](https://vuejs.org), or any other)

Examples include (but are not limited to), showing a "edit post" popup with JSON data
posting in the `/post/1` window instead of separate view `/post/1/edit`

You can also do something with jQuery, but that will not be counted as full point.
Comment: converted Post show page, added edit functionality(activated by icon or double click)

## Task 11: Statistics Dashboard

_This task evaluates understanding of project and creative thinking_

Create a new "dashboard" page with various statistics about posts and comments. The
statistics can be picked freely from your own ideas on what else might be needed.

Comment: added 4 icons with custom sass style with different stats

## Task 12:

_This task is a possibility to display any other skills and technology passions of the applicant_

You are free to add any other functionality as a demo of your skills.

This will be benefitial to differentiade yourself from others and can definetley score extra points.
