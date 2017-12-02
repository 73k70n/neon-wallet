// @flow
import React from 'react'
import ReactModal from 'react-modal'
import Close from 'react-icons/lib/md/close'
import styles from './BaseModal.scss'

type Props = {
    title: string,
    children: React$Node,
    hideModal: Function,
    width?: string,
    height?: string,
    className?: string,
    style: {
      content: Object,
      overlay: Object
    },
    onAfterOpen?: Function
}

const BaseModal = ({ hideModal, title, children, width, height, className, style, onAfterOpen }: Props) => (
  <ReactModal
    isOpen
    onRequestClose={hideModal}
    style={{
      content: {
        width,
        height,
        margin: 'auto',
        padding: 0,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 4px',
        border: 'none',
        borderRadius: '4px',
        ...style.content
      },
      overlay: {
        backgroundColor: 'rgba(26, 54, 80, 0.25)',
        margin: 'auto',
        ...style.overlay
      }
    }}
    className={className}
    onAfterOpen={onAfterOpen}
  >
    <div className={styles.modalHeader}>
      <div className={styles.modalHeaderTitle}>{title}</div>
      <div className={styles.modalHeaderCloseButton} onClick={hideModal}><Close /></div>
    </div>
    <div className={styles.modalBody}>{children}</div>
  </ReactModal>
)

BaseModal.defaultProps = {
  width: '450px',
  height: '450px',
  style: {
    content: {},
    overlay: {}
  }
}

export default BaseModal
