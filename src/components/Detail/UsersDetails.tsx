import React from 'react';
import Tags from '../Gallery/Tags';

export default function UsersDetails({handleCopyUser, image, imageSizes, user}: any) {
  return (
    <div className="col-3 text-start">
      <h4 className="fw-bold">Author</h4>
      <div className="input-group w-75">
        <input
          type="text"
          aria-label="First name"
          className="form-control"
          placeholder={image?.user?.displayName}
          onClick={() => handleCopyUser(image?.user?.displayName ?? '')}
          readOnly
        />
      </div>
      <h4 className="fw-bold mt-4">Keywords</h4>

      <div className="w-50">
        <Tags tags={image.tags} />
      </div>

      {user?.token && (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle mt-3 w-75 p-2"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Download
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {imageSizes.map((imageSize: any) => (
              <li key={imageSize.value}>
                <a className="dropdown-item" href={image?.path!} data-value={imageSize.value} download target="_blank" rel="noreferrer">
                  {imageSize.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
