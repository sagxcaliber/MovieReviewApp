from fastapi.responses import JSONResponse
from fastapi import status


class Result:
    def __init__(self):
        self.r_obj = None
        self.r_fetch_time = None
        self.status = None
        self.message = None

    def get(self):
        return JSONResponse(
            content={
                'status': self.status
                , 'fetchTime': round(self.r_fetch_time, 10)
                , 'response': self.r_obj
                , 'message': self.message

            }
            , status_code=self.status
        )

    def set(
            self
            , r_obj=()
            , fetch_time=0
            , status_code=status.HTTP_500_INTERNAL_SERVER_ERROR
            , message=''
    ):
        self.r_obj = r_obj
        self.r_fetch_time = fetch_time
        self.status = status_code
        self.message = message
