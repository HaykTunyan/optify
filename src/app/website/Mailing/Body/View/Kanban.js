import React from 'react';
import MessagePreview from '../MessagePreview/index';
import { ScrollBox, Text } from 'style-guide';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'store/actions';
import selectors from 'store/selectors';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useLocation } from 'react-router-dom';

const KanbanView = () => {
  // hooks
  const dispatch = useDispatch();
  const { search } = useLocation();
  // selectors
  const {
    mailing: { selectedIds },
  } = useSelector(selectors.ui);

  const { emailsByLabel, labels } = useSelector(selectors.mailing);

  // actions
  const onSelect = (payload) => dispatch(actions.ui.selectEmail(payload));
  const onDeselect = (payload) => dispatch(actions.ui.deSelectEmail(payload));

  return (
    <div className='xs:h-512 md:h-full w-full'>
      <ScrollBox>
        <div className='flex gap-4 px-8 py-5 min-h-full min-w-max'>
          <DragDropContext>
            {labels.data.map((lb) => (
              <Droppable droppableId={lb.id.toString()} key={lb.id}>
                {(provided, snapshot) => (
                  <div className='w-80' ref={provided.innerRef} {...provided.droppableProps}>
                    <div className='bg-lightAlpha py-5 pl-4 rounded-15 shadow-label'>
                      <Text.MD className='text-dark' children={lb.name} />
                    </div>
                    <div className='pt-3' />
                    <div className='grid gap-5 grid-cols-1'>
                      {emailsByLabel(lb.id).map((item, key) => (
                        <Draggable draggableId={item.id.toString()} index={item.id} key={key}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <MessagePreview.Kanban
                                search={search}
                                item={item}
                                key={item.id}
                                onSelect={onSelect}
                                onDeselect={onDeselect}
                                selected={selectedIds.includes(item.id)}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                    <div className='pb-4' />
                  </div>
                )}
              </Droppable>
            ))}
          </DragDropContext>
        </div>
      </ScrollBox>
    </div>
  );
};

export default KanbanView;
