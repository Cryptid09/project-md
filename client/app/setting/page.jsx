

const settings = () => {
  
      const user = {
        avatar: 'https://avatars.githubusercontent.com/u/3435100?s=460&u=',
        userId: 'user123',
        email: 'user@example.com',
        friends: ['Friend 1', 'Friend 2', 'Friend 3'],
        communities: ['Community 1', 'Community 2', 'Community 3'],
        uploads: ['Upload 1', 'Upload 2', 'Upload 3'],
      };
    
      return (
        <div className="min-h-screen bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark p-4">
          <div className="max-w-4xl mx-auto">
            {/* User Profile Section */}
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-16 h-16 rounded-full border border-gray-300 dark:border-gray-700"
              />
              <div>
                <h1 className="text-2xl font-bold">{user.userId}</h1>
                <p>{user.email}</p>
              </div>
            </div>
    
            {/* Dashboard Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Friend List */}
              <div className="bg-primary-light dark:bg-primary-dark p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-2">Friends</h2>
                <ul>
                  {user.friends.map((friend, index) => (
                    <li key={index} className="mb-1">
                      {friend}
                    </li>
                  ))}
                </ul>
              </div>
    
              {/* Communities List */}
              <div className="bg-primary-light dark:bg-primary-dark p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-2">Communities</h2>
                <ul>
                  {user.communities.map((community, index) => (
                    <li key={index} className="mb-1">
                      {community}
                    </li>
                  ))}
                </ul>
              </div>
    
              {/* Upload List */}
              <div className="bg-primary-light dark:bg-primary-dark p-4 rounded-lg shadow col-span-full">
                <h2 className="text-xl font-semibold mb-2">Uploads</h2>
                <ul>
                  {user.uploads.map((upload, index) => (
                    <li key={index} className="mb-1">
                      {upload}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default settings;