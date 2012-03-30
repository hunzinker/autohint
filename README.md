# autohint

Add hints to form input fields.

## Usage

Copy the contents of src/{stylesheets:javascripts} to the corresponding directories in your application.

Ensure jquery.autohint.js and autohint.css are loaded in your document's `<head>`.

    <script type='text/javascript' src='/javascripts/jquery.autohint.js'></script>
    <link rel="stylesheet" href="/stylesheets/autohint.css" type="text/css" />

Remember to load jquery.autohint.js *after* the main jQuery library.

Initialize autohint.

    <script type='text/javascript'>
        $(function() {
            var form = $('form :input.auto-hint');
            form.autoHint();

            // Disable submit button and remove input values equal to attr title.
            $('form').submit(function() {
                $('input[type=submit]', this).val('Processing...').attr(
                  'disabled', 'disabled'
                );

                form.autoHint('removeHints');
            });

            // Reset form.
            $('#reset_form').click(function() {
                $('textarea').val('');
                $('input:text').val('');
                form.autoHint('addHints')
            });

        });
    </script>

## Example ERB

    <%= form_for @blog do |f| %>
        <div>
            <%= f.text_area :blog_text,
                :title => "Start typing here...",
                :class => "auto-hint" %>
        </div>
        <div>
            <%= f.text_field :author,
                :title => "Enter your full name.",
                :class => "auto-hint" %>
        </div>
        <div>
            <%= f.submit "Submit" %>&nbsp;&nbsp;
            <%= submit_tag "Reset", :name => "reset",
                :type => "button", :id => "reset_form" %>
        </div>
    <% end %>

## Maintained By

* Ken Seal (https://github.com/hunzinker)

## License

MIT License.
