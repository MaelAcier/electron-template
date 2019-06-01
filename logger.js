const { dialog } = require('electron')
const { mainStory, addListener, chalk , config } = require('storyboard');
const consoleListener = require('storyboard-listener-console').default;
const wsServerListener = require('storyboard-listener-ws-server').default
const fileListener = require('storyboard-listener-file').default
addListener(consoleListener);
addListener(wsServerListener);
addListener(fileListener, {
    filePath: "log.log",
});
config({ filter: '*:*' });

const filename__ = require('path').basename(__filename);

process.on('uncaughtException', function (err) {
    mainStory.error('Uncaught Exception', { attach: err });
    dialog.showErrorBox('uncaughtException', String(err))
})

mainStory.info(filename__,'Logger ready')

/* mainStory.trace('Teeny-weeny detail: x = 3, y = 4');
mainStory.debug('Called login()');
mainStory.info('User "admin" authenticated successfully');
mainStory.warn('Sad we can\'t show colors in GFM');
mainStory.error('User "admin" could not be authenticated', { attach: new Error('test') });
mainStory.info('http', `GET ${chalk.green.bold('/api/item/26')}`);
mainStory.info('db', `Fetching item ${chalk.green.bold('26')}...`);
mainStory.info('test', {
    attach: {
        "employees": [
            { "firstName": "John", "lastName": "Doe" },
            { "firstName": "Anna", "lastName": "Smith" },
            { "firstName": "Peter", "lastName": "Jones" }
        ]
    } })

const story = mainStory.child({
    src: 'lib',
    title: 'Little Red Riding Hood',
    level: 'DEBUG',
});
story.info('Once upon a time...');


mainStory.info('',{ attach: [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]})
story.warn('...a wolf appeared!...');
story.info('...and they lived happily ever after.');
story.close(); */


//throw new Error('fail')

module.exports = mainStory

