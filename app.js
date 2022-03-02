const app = new Vue ({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                visible: true,
                messages: [
                    {  
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'send'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'send'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'https://www.w3schools.com/w3images/avatar2.png',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'send'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'send'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'send'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'https://www.w3schools.com/w3images/avatar6.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'send'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        currentIndex: 0,
        newSendMessage: '',
    },
    methods: {
        setActiveContact(index) {
            this.currentIndex = index;
        },
        getHours: function( date ){
            const hour = date.split(' ')[1];
            return hour.substring(0,5);
        },
        createMessage: function( text,status ){
            const d = new Date();

            const newMessage = {
                status,
                text,
                date: `${ d.getDate() }/${ d.getMonth()+1 }/${ d.getFullYear() } ${ d.getHours() }:${ d.getMinutes() }:${ d.getSeconds() }`
            }

            return newMessage;
        },
        sendMessage: function() {
            const newMessage = this.createMessage( this.newSendMessage,'send' );
            const index = this.currentIndex;

            this.contacts[ index ].messages.push( newMessage );
            this.newSendMessage = '';
            
            setTimeout( () => {
                this.replyTo( index );
            }, 2000 );
        },
        replyTo: function(index) {
            const newMessage = this.createMessage( 'ok','received' )

            this.contacts[ this.currentIndex ].messages.push( newMessage );
        },
    }
})
