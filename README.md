Meteor implementation of (eyes)[https://github.com/cloudhead/eyes.js]

Implements **eyes(anything)** on server and client.

Also registeres a template helper so that ```{{{eyes this}}}``` will show
and eye icon, that toggles a box with the pretty printed content.

As a debug aid, you can also use an extra __host pattern__ like ```{{{eyes this "localhost"}}}```