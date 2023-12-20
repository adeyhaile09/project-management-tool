import { Button, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { createWorkspace } from '../../config/firebase';

const CreateWorkspace = () => {
  const [name, setName] = useState('');
  const [error] = useState({});

  const handleCreateWorkspace = (e) => {
    e.preventDefault();
    createWorkspace(name);
  };

  return (
    <div className="flex flex-col h-screen ">
      <div className="flex-1 flex flex-col justify-center overflow-hidden mx-3">
        <div className="relative mx-auto w-full max-w-md bg-card px-6 pt-10 shadow rounded ">
          <div className="w-full">
            <div className="text-center">
              <Text size="xl" variant="t2">
                <span className="font-semibold"> Create Workspace</span>
              </Text>
              <Text size="sm" className="mt-2 text-gray-500">
                Use workspace to organize items around topics, projects, or
                more.
              </Text>
            </div>
            <div className="mt-8">
              <form onSubmit={handleCreateWorkspace}>
                <TextInput
                  name="name"
                  error={error.name}
                  placeholder="Enter workspace name"
                  required
                  label="Workspace Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <div className="flex place-content-end gap-4 my-6 mt-8">
                  <Button color="#f44336" variant="outline">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    color="#247e7d"
                    onClick={createWorkspace}
                  >
                    Create
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkspace;
