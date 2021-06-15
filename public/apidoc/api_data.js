define({
  api: [
    {
      type: 'post',
      url: '/users',
      title: 'Create a user',
      version: '1.0.0',
      name: 'Create',
      group: 'User',
      permission: [
        {
          name: 'authenticated user',
        },
      ],
      parameter: {
        fields: {
          'Request body': [
            {
              group: 'Request body',
              type: 'String',
              optional: false,
              field: 'name',
              description: '<p>The user name</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content:
            'const data = {\n  "name": "Do the dishes"\n}\n\n$http.defaults.headers.common["Authorization"] = token;\n$http.post(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());',
          type: 'js',
        },
      ],
      success: {
        fields: {
          'Success 201': [
            {
              group: 'Success 201',
              type: 'String',
              optional: false,
              field: 'message',
              description: '<p>User saved successfully!</p>',
            },
            {
              group: 'Success 201',
              type: 'String',
              optional: false,
              field: 'id',
              description: '<p>The campaign id</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success response:',
            content:
              ' HTTPS 201 OK\n {\n  "message": "User saved successfully!",\n  "id": "57e903941ca43a5f0805ba5a"\n}',
            type: 'json',
          },
        ],
      },
      filename: 'Routes/userRouter.js',
      groupTitle: 'User',
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'Unauthorized',
              description: '<p>Only authenticated users can access the endpoint.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Unauthorized response:',
            content: 'HTTP 401 Unauthorized\n{\n  "message": "Invalid credentials"\n}',
            type: 'json',
          },
        ],
      },
    },
    {
      type: 'delete',
      url: '/users/:id',
      title: 'Delete a user',
      version: '1.0.0',
      name: 'Delete',
      group: 'User',
      permission: [
        {
          name: 'authenticated user',
        },
      ],
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'id',
              description: '<p>The user id</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content:
            '$http.defaults.headers.common["Authorization"] = token;\n$http.delete(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());',
          type: 'js',
        },
      ],
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'message',
              description: '<p>user deleted successfully!</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success response:',
            content: ' HTTPS 200 OK\n {\n  "message": "user deleted successfully!"\n}',
            type: 'json',
          },
        ],
      },
      filename: 'Routes/userRouter.js',
      groupTitle: 'User',
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'Unauthorized',
              description: '<p>Only authenticated users can access the endpoint.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Unauthorized response:',
            content: 'HTTP 401 Unauthorized\n{\n  "message": "Invalid credentials"\n}',
            type: 'json',
          },
        ],
      },
    },
    {
      type: 'get',
      url: '/users/:id',
      title: 'Retrieve a user',
      version: '1.0.0',
      name: 'GetOne',
      group: 'User',
      permission: [
        {
          name: 'authenticated user',
        },
      ],
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'id',
              description: '<p>The user id</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content:
            '$http.defaults.headers.common["Authorization"] = token;\n$http.get(url)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());',
          type: 'js',
        },
      ],
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: '_id',
              description: '<p>The user id</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'name',
              description: '<p>The user name</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success response:',
            content: 'HTTPS 200 OK\n{\n   "_id": "57e8e94ea06a0c473bac50cc",\n   "name": "test user",\n   "__v": 0\n }',
            type: 'json',
          },
        ],
      },
      filename: 'Routes/userRouter.js',
      groupTitle: 'User',
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'Unauthorized',
              description: '<p>Only authenticated users can access the endpoint.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Unauthorized response:',
            content: 'HTTP 401 Unauthorized\n{\n  "message": "Invalid credentials"\n}',
            type: 'json',
          },
        ],
      },
    },
    {
      type: 'get',
      url: '/users',
      title: 'List All Users',
      version: '1.0.0',
      name: 'List',
      group: 'User',
      permission: [
        {
          name: 'authenticated user',
        },
      ],
      parameter: {
        fields: {
          'Request body': [
            {
              group: 'Request body',
              type: 'String',
              optional: false,
              field: 'Nill',
              description: '',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content:
            '$http.defaults.headers.common["Authorization"] = token;\n$http.get(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());',
          type: 'js',
        },
      ],
      success: {
        fields: {
          'Success 201': [
            {
              group: 'Success 201',
              type: 'String',
              optional: false,
              field: 'message',
              description: '<p>!</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success response:',
            content: ' HTTPS 201 OK\n {\n  "message": "All users Retruved!",\n}',
            type: 'json',
          },
        ],
      },
      filename: 'Routes/userRouter.js',
      groupTitle: 'User',
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'Unauthorized',
              description: '<p>Only authenticated users can access the endpoint.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Unauthorized response:',
            content: 'HTTP 401 Unauthorized\n{\n  "message": "Invalid credentials"\n}',
            type: 'json',
          },
        ],
      },
    },
    {
      type: 'put',
      url: '/users/:id',
      title: 'Update a user',
      version: '1.0.0',
      name: 'Update',
      group: 'user',
      permission: [
        {
          name: 'authenticated user',
        },
      ],
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'id',
              description: '<p>The user id</p>',
            },
          ],
          'Request body': [
            {
              group: 'Request body',
              type: 'String',
              optional: false,
              field: 'name',
              description: '<p>The user name</p>',
            },
          ],
        },
      },
      examples: [
        {
          title: 'Example usage:',
          content:
            'const data = {\n  "name": "Run in the park"\n}\n\n$http.defaults.headers.common["Authorization"] = token;\n$http.put(url, data)\n  .success((res, status) => doSomethingHere())\n  .error((err, status) => doSomethingHere());',
          type: 'js',
        },
      ],
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'message',
              description: '<p>user updated successfully!</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success response:',
            content: ' HTTPS 200 OK\n {\n  "message": "user updated successfully!"\n}',
            type: 'json',
          },
        ],
      },
      filename: 'Routes/userRouter.js',
      groupTitle: 'user',
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'Unauthorized',
              description: '<p>Only authenticated users can access the endpoint.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Unauthorized response:',
            content: 'HTTP 401 Unauthorized\n{\n  "message": "Invalid credentials"\n}',
            type: 'json',
          },
        ],
      },
    },
  ],
});
