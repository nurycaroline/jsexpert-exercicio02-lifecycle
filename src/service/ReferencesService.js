class ReferencesService {
  getCounterCopyingReferences(object) {
    return object;
  }

  getCounterWithoutCopyingReferences(object) {
    return {
      ...object
    };
  }


  // @TIP: if you want to do the extra sub-challenge, uncomment and implement the following function:
  getCounterWithoutDeepCopyingReferences(object) {
    return { object: { ...object.object } };
  }

}

module.exports = ReferencesService;
