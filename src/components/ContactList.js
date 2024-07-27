/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Contact from './Contact'

const ContactList = ({ data, currentPage, getAllContacts }) => {
    return (
        <main className='main'>

            { /* Display contacts*/
                data?.content?.length === 0 && <div>No Contacts. Please add a new contact.</div>}

            <ul className='contact__list'>
                {
                    data?.content?.length > 0 && data.content.map(
                        contact => <Contact contact={contact} key={contact.id} />
                )}
            </ul>

            { /* Pagination */
                data?.content?.length > 0 && data?.content?.totalPages > 1 &&
                    <div className='pagination'>
                        <a onClick={() => getAllContacts(currentPage - 1)} 
                            className={0 === currentPage ? 'disabled' : ''}>
                            &lagquo;
                        </a>

                        {data && [...Array(data.totalPages).keys()].map((page, index) => 
                            <a onClick={getAllContacts(page)} 
                                className={currentPage === page ? 'active' : ''}>
                                {page + 1}
                            </a>
                        )}

                        <a onClick={() => getAllContacts(currentPage + 1)} 
                            className={data.totalPages === currentPage ? 'disabled' : ''}>
                            &raquo;
                        </a>
                    </div>
            }
        </main>
    )
}

export default ContactList