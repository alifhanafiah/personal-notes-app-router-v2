import PropTypes from 'prop-types';
import React from 'react';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';

const DetailPageAction = ({
  id,
  title,
  archived,
  archiveNote,
  deleteNote,
  unArchiveNote,
}) => {
  const onArchiveHandler = () => {
    archiveNote(id);
  };

  const onUnarchiveHandler = () => {
    unArchiveNote(id);
  };

  const onDeleteHandler = () => {
    // sweet alert
    Swal.fire({
      title: `Hapus note "${title}"`,
      text: 'Apakah anda yakin untuk menghapus note ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#183153',
      cancelButtonColor: '#e0e0e0',
      confirmButtonText: 'Hapus',
    }).then((result) => {
      if (result.isConfirmed) {
        // jalankan jika konfirmasi hapus
        deleteNote(id);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Note "${title}" telah berhasil terhapus`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="detail-page__action">
      {archived ? (
        <button
          className="action"
          type="button"
          title="Aktifkan"
          onClick={onUnarchiveHandler}
        >
          <BiArchiveOut />
        </button>
      ) : (
        <button
          className="action"
          type="button"
          title="Arsipkan"
          onClick={onArchiveHandler}
        >
          <BiArchiveIn />
        </button>
      )}

      <button
        className="action"
        type="button"
        title="Hapus"
        onClick={onDeleteHandler}
      >
        <MdOutlineDeleteOutline />
      </button>
    </div>
  );
};

DetailPageAction.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  archived: PropTypes.bool,
  archiveNote: PropTypes.func,
  unArchiveNote: PropTypes.func,
  deleteNote: PropTypes.func,
};

export default DetailPageAction;
