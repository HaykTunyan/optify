import React, { Fragment, useEffect, useRef, useState } from 'react';
import ReactTags from 'react-tag-autocomplete';
import Text from './Text';
import Chips from './Chips';
import Input from './Input';
import Icon from './Icon';
import jobs from 'common/jobs';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';

const TagsAutocomplete = ({
  suggestions = jobs,
  error,
  control,
  name,
  params,
  autofocus,
  randomOption,
  placeholderText,
}) => {
  const selecetRef = useRef(null);
  const [tags, setTags] = useState([]);
  const { t } = useTranslation();

  const onAddition = ({ tag, cb }) => {
    const data = [...tags, tag];
    setTags(data);
    cb(data);
  };

  const onDelete = ({ tag, cb }) => {
    const data = tags.filter((t) => (t.id && t.id !== tag.id) || t.name !== tag.name);
    setTags(data);
    cb(data);
  };

  const onCheckboxChange = ({ event, cb }) => {
    const randomChecked = event.target.checked;
    if (randomChecked) {
      const randomIndex = Math.floor(Math.random() * 10) + 1;
      const data = [suggestions[randomIndex]];
      setTags(data);
      cb(data);
    } else {
      setTags([]);
      cb([]);
    }
  };
  useEffect(() => {
    if (autofocus) {
      const input = selecetRef.current.input?.current?.input?.current;
      input && input.focus();
    }
  }, [autofocus]);

  const hasError = error?.message;

  return (
    <Controller
      defaultValue={[]}
      name={name}
      control={control}
      render={(props) => (
        <div className='w-full'>
          {tags.length ? (
            <Fragment>
              <div className='grid grid-cols-1 gap-2'>
                {tags.map((tag, idx) => (
                  <div
                    className='flex lg:flex-row xs:flex-col xs:flex-auto xs:justify-start lg:items-center gap-3'
                    key={idx}
                  >
                    <Chips
                      children={tag.name}
                      onDelete={() => onDelete({ tag, cb: props.onChange })}
                    />
                    {idx !== tags.length - 1 && randomOption ? (
                      <Text.SM children={t('not_found_than')} />
                    ) : null}
                  </div>
                ))}
              </div>
              <div className='pt-4' />
            </Fragment>
          ) : null}

          <div className='flex md:flex-row xs:flex-col'>
            <ReactTags
              ref={selecetRef}
              autoresize={false}
              placeholderText={placeholderText}
              noSuggestionsText={params?.allowNew ? null : t('no_match')}
              tags={[]}
              suggestions={suggestions}
              suggestionsTransform={(query, suggestions) => {
                return suggestions.filter((sg) => {
                  let isTagSelected = false;
                  let hasMatch = sg.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
                  if (tags.length) {
                    isTagSelected = tags.find((t) => t.id === sg.id);
                  } else {
                  }
                  return hasMatch && !isTagSelected;
                });
              }}
              suggestionComponent={({ item }) => (
                <div className='react-tags__suggestion-item'>
                  <Text.SM children={item.name} />
                </div>
              )}
              onDelete={(e) => {
                // props.onChange(e);
                // onDelete(e);
              }}
              onAddition={(tag) => {
                onAddition({ tag, cb: props.onChange });
              }}
              delimiters={['Enter', 'Tab']}
              {...params}
            />
          </div>
          <div>
            {randomOption ? (
              <div>
                <div className='pt-4' />
                <div className='flex items-center'>
                  <Input.Checkbox
                    name='random'
                    onChange={(event) => onCheckboxChange({ event, cb: props.onChange })}
                    register={() => null}
                    labeltext={t('random')}
                    defaultChecked={false}
                  />
                  <div className='ml-2'>
                    <Icon.Info className='fill-primary' />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          {hasError ? (
            <div className='pt-1'>
              <Text.Error>{error.message}</Text.Error>
            </div>
          ) : null}
        </div>
      )}
    />
  );
};

export default TagsAutocomplete;
