import cn from 'classnames';
import React, {
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { User } from '../types/User';

type Props = {
  users: User[];
  setSelectedUser: Dispatch<SetStateAction<User | null>>
  selectedUser: User | null;
};

export const UserSelector: React.FC<Props> = ({
  users,
  selectedUser,
  setSelectedUser,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
    setDropdownOpen(false);
  };

  return (
    <div
      data-cy="UserSelector"
      className={cn('dropdown', {
        'is-active': dropdownOpen,
      })}
    >
      <div className="dropdown-trigger">
        <button
          type="button"
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>
            {selectedUser
              ? selectedUser.name
              : 'Choose a user'}
          </span>

          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>

      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {users.map(user => (
            <a
              key={user.id}
              href={`#user-${user.id}`}
              className="dropdown-item"
              onClick={() => handleSelectUser(user)}
            >
              {user.name}
            </a>
          ))}

        </div>
      </div>
    </div>
  );
};
