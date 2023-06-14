'use client';

import Button from '@/app/components/Button';
import Modal from '@/app/components/Modal';
import Input from '@/app/components/Inputs/Input';
import MultiSelect from './MultiSelect';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { CldUploadButton } from 'next-cloudinary';
import clsx from 'clsx';

interface AddBaseModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const BaseTypesRecord: Record<number, any> = {
  0: 'Farm',
  1: 'Trophy',
  2: 'Fun',
  3: 'War',
  4: 'Hybrid',
  5: 'Upgrade',
};


const AddBaseModal: React.FC<AddBaseModalProps> = ({
  isOpen,
  onClose
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      description: '',
      type: [],
      townHall: '',
      baseUrl: '',
      image: '',
    },
  });

  const type = watch('type');
  const image = watch('image');

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/base', {
        ...data
      })
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleUpload = (result: any) => {
    setValue('image', result?.info?.secure_url, { shouldValidate: true });
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-3">
            <h2 className="text-base font-semibold leading-7 text-gray-200">
              Add a new base
            </h2>
            <div className="mt-10 flex flex-col gap-y-6">
              <Input
                register={register}
                label="Name"
                id="name"
                disabled={isLoading}
                required
                errors={errors}
              />
              <Input
                register={register}
                label="Description"
                id="description"
                disabled={isLoading}
                required
                errors={errors}
              />
              <Input
                register={register}
                label="Base Url"
                id="baseUrl"
                disabled={isLoading}
                required
                errors={errors}
              />
              <Input
                register={register}
                label="Town Hall"
                id="townHall"
                disabled={isLoading}
                required
                errors={errors}
              />
              <MultiSelect
                disabled={isLoading}
                label="Type"
                options={Object.values(BaseTypesRecord).map((type, index) => ({
                  label: type,
                  value: index,
                }))}
                onChange={(value) => setValue('type', value, { shouldValidate: true })}
                value={type}
              />
              <div className='flex items-center gap-x-3'>
                <Image width={48} height={48} className='rounded-full' src={image || '/images/noImage.jpg'} alt='base image' />
                <CldUploadButton options={{ maxFiles: 1 }} onUpload={handleUpload} uploadPreset='clashtracker'>
                  <Button disabled={isLoading} type="button">
                    Upload Image
                  </Button>
                </CldUploadButton>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={onClose}
            type="button"
            disabled={isLoading}
            className={clsx(
              `
              flex 
              justify-center 
              rounded-md 
              px-3 
              py-2 
              text-sm 
              font-semibold 
              focus-visible:outline 
              focus-visible:outline-2 
              focus-visible:outline-offset-2
              text-gray-200
              border
              border-gray-200
              `,
              isLoading && 'opacity-50 cursor-default',
            )}
          >
            Cancel
          </button>
          <Button disabled={isLoading} type="submit">
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddBaseModal;