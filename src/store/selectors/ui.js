const ui = (state) => ({
  sidebar: { opened: state.ui.sidebar.opened },
  modal: { type: state.ui.modal?.type, payload: state.ui.modal?.payload },
  mailing: { selectedIds: state.ui.mailing?.selectedIds },
  customTemplateData: state.ui.customTemplateData,
  selectedTemplate: state.ui.selectedTemplate,
  keywords: state.ui.keywords,
  paragraphs: state.ui.paragraphs,
  paragraphKeywords: state.ui.paragraphKeywords,
  keywordsByParagraph: (parId) => state.ui.paragraphKeywords[parId] || [],
});

export default ui;
