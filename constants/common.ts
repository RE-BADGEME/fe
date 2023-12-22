/**
 * 공통으로 사용되는 단어들을 정의합니다.
 * @exports commonWords - 공통 단어들
 * @property {string} loading - 로딩중 글자
 * @property {object} error - 에러 메세지 모음
 * @property {string} error.message - 에러 메세지
 * @property {string} error.subMessage - 에러 서브 메세지
 * @property {string} error.goBack - 홈화면으로 가기 버튼 글자
 */

export const commonWords = {
  loading: 'Loading...',
  error: {
    message: '404 Not Found',
    subMessage: 'Please try again later.',
    goBack: 'Go Back to Home',
  },
};

export const mainWords = {
  title: '메인페이지',
};
